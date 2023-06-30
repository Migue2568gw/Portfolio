import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { portafolioConfig } from "../../Config";

const categorias = portafolioConfig();

const firebaseConfig = {
    apiKey: "AIzaSyCTRK47zeTW4vbUsNLOTwzIMCm3euoDyyw",
    authDomain: "portafolio-cf1be.firebaseapp.com",
    projectId: "portafolio-cf1be",
    storageBucket: "portafolio-cf1be.appspot.com",
    messagingSenderId: "295060381773",
    appId: "1:295060381773:web:3ea21f470124f7950cfc04",
    measurementId: "G-29WMT2LRRJ"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export async function getFileURL() {
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

    return { result: JsonResult };
}





