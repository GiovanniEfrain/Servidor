import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`;

// Router Dinamico en base  al nombre del archivo
 
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then( (moduleRouter) => {
            router.use(`/${fileName}`, moduleRouter.router);
        })
    }
});

export default router;
