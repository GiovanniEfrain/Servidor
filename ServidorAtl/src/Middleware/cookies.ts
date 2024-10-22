async function cookieValidator(cookies: { testCookie: any }) {
    try{
        // await externallyValidateCookies(cookies.testCookie)
    } catch {
        throw new Error('Invalid cookies')
    }
    
}