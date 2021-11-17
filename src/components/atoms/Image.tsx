import { useMemo } from "react";

interface ImageProps {
    file: string
}

const ImagePreview: React.FC<ImageProps> = (props) => {
    const src = useMemo(() => {
        if (!props.file)
            return;
        return props.file;
    }, [props.file]);

    return (
        <img src={src} style={{ maxWidth: "100px" }}/>
    );
}

export default ImagePreview
