import { app } from "../firebase/base";

export const uploadFilesAndGetURLs = (files: File[], path: string) => {

    const fileToFirebaseURL = async (file: File) => {
        const storageRef = app.storage().ref(path);
        const imageRef = storageRef.child(file.name);
        await imageRef.put(file);
        return await imageRef.getDownloadURL();
    }

    return Promise.all(files.map(fileToFirebaseURL));
}