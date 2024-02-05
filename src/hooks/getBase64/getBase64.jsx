export const getBase64Image = (width, imageFile, setBase64) => {
    const WIDTH = width;
    const file = imageFile;
    
    if(!WIDTH && !file) throw Error("File or width missing of base64 function");
    
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        let imageUrl = e.target.result;
        let image = document.createElement("img");
            image.src = imageUrl;


        image.onload = (e) => {
            let canvas = document.createElement("canvas");
            let ratio = WIDTH / e.target.width;

            canvas.width = WIDTH;
            canvas.height = e.target.height * ratio;

            let context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const compress_base64_image = context.canvas.toDataURL("image/webp");

            setBase64(compress_base64_image);
        }
    }
}