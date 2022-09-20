 const crypto=require('crypto');

module.exports={
   //DB_URL:"mongodb://localhost:27017/restaurantsDB"
 DB_URL:"mongodb+srv://admin:admin@cluster1.s8dzerg.mongodb.net/?retryWrites=true&w=majority",
 clientId:"25124685067-35olf40ct44h9kki2fndl9nkl5svbspv.apps.googleusercontent.com",
 JWT_SIGN_KEY:"mypersonalkey1234",
 JWT_SECRET_KEY:crypto.randomBytes(16).toString('hex'),
 EMAIL_SERVICE:"SendGrid",
 EMAIL_USERNAME:"apikey",
 EMAIL_PASSWORD:"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",
 EMAIL_FROM:"jazzkaurjk37@gmail.com",
}