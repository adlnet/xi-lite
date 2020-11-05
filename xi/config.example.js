module.exports = {

    secret: "some-long-secret",

    keycloak: {
        "realm": (process.env.KEYCLOAK_REALM || "tla"),
        "auth-server-url": (process.env.KEYCLOAK_URL || "http://localhost:8080/auth"),
        "ssl-required": "none",
        "resource": "static-content-viewer",
        "public-client": true,
        "confidential-port": 0
    },

    mongo: {
        host: (process.env.DB_CONTAINER || "192.168.0.134"),
        db: (process.env.DB_NAME || "mydb"),
        collection: (process.env.COLLECTION_NAME || "records")
    },

    HOSTNAME: process.env.HOSTNAME,
    ROOT: (process.env.ROOT) ? `/${process.env.ROOT}` : "/xi" ,
    APP_PORT: (process.env.APP_PORT || 5000),
    siteName: (process.env.SITE_NAME || "Experience Index Lite"),
    siteColor: (process.env.SITE_COLOR || ""),
}