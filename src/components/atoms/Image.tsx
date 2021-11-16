import { useMemo } from "react";

interface ImageProps {
    file: string
}

const Image: React.FC<ImageProps> = (props) => {
    const src = useMemo(() => {
        if (!props.file)
            return;
        return props.file;
    }, [props.file]);

    return (
        <img src={src} />
    );
}

export default Image
