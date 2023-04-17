
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref, getDownloadURL} from 'firebase/storage'
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyDp9JOGJWkdHDGw2wSZPXFIK1n8nyDzeIo",
  authDomain: "blog-images-a9cef.firebaseapp.com",
  projectId: "blog-images-a9cef",
  storageBucket: "blog-images-a9cef.appspot.com",
  messagingSenderId: "627088834164",
  appId: "1:627088834164:web:66287ff6ba0185940f9b21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


export async function uploadFile(file){
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const UrlImage = await getDownloadURL(storageRef);
    return UrlImage
}

