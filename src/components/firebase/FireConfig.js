import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { portafolioConfig } from "../../Config";

const categorias = portafolioConfig();
let ResultsCache = null;

const firebaseConfig = {
    apiKey: "AIzaSyCjK7Z21ksYFvvr8xR1RKJscm6Jd6RUoyI",
    authDomain: "portfolio-b61d2.firebaseapp.com",
    projectId: "portfolio-b61d2",
    storageBucket: "portfolio-b61d2.appspot.com",
    messagingSenderId: "455996424038",
    appId: "1:455996424038:web:cd767e643a0a08f2c892a7"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function getFileURL() {
    if (ResultsCache) {
        return { result: ResultsCache };
    }

    const urlPromises = categorias.map(async (categoria) => {
        const imagesRef = ref(storage, categoria);
        const imageList = await listAll(imagesRef);
        const urls = await Promise.all(
            imageList.items.map(async (imageRef) => {
                const url = await getDownloadURL(imageRef);
                return { categoria: categoria, urlImgs: url };
            })
        );
        return urls;
    });

    const urlResults = await Promise.all(urlPromises);
    const JsonResult = urlResults.reduce((result, urls) => {
        return result.concat(urls);
    }, []);

    ResultsCache = JsonResult;
    return { result: JsonResult };
}





