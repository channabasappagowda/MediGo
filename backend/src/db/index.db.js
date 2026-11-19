import mongoose from "mongoose"
import dns from "node:dns"

// MongoDB Atlas SRV DNS fallback for Windows networks
const DNS_FAILURE_CODES = ["ECONNREFUSED", "ETIMEOUT", "ESERVFAIL", "EREFUSED"]

const applyDnsOverrideIfNeeded = async (uri) => {
    const match = /^mongodb\+srv:\/\/(?:.*@)?([^/?@]+)/.exec(uri)
    if (!match) return

    const srvName = `_mongodb._tcp.${match[1]}`

    try {
        await dns.promises.resolveSrv(srvName)
        return
    } catch (error) {
        if (!DNS_FAILURE_CODES.includes(error.code)) return

        const override = (process.env.DNS_SERVERS || "").split(",").map((s) => s.trim()).filter(Boolean)

        if (override.length === 0) {
            console.warn(`MongoDB DNS lookup failed: ${error.code}. Set DNS_SERVERS for this network.`)
            return
        }

        try {
            const probe = new dns.promises.Resolver()
            probe.setServers(override)
            await probe.resolveSrv(srvName)
        } catch (probeError) {
            console.warn(`DNS_SERVERS test failed: ${probeError.code || probeError.message}`)
            return
        }

        const original = dns.getServers()
        dns.setServers(override)
        console.log(`Using DNS_SERVERS [${override.join(", ")}] instead of [${original.join(", ")}]`)
    }
}

const connectDB = async () => {
    try {
        if(!process.env.MONGODB_URI){
            throw new Error("MONGODB_URI is missing from environment variables")
        }

        await applyDnsOverrideIfNeeded(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`)
        console.log(`MongoDB Connected Successfully!`, connectionInstance.connection.host)
        
    } catch (error) {
        console.error("Error while connecting to MongoDB:", error.message)
        console.error("Full error:", error)
        process.exit(1)
    }
} 

export default connectDB