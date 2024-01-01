import  gsap, { Power3 } from "gsap";
import FontFaceObserver from "fontfaceobserver";
import imagesLoaded from "imagesloaded";


export const useLoader = ($etFn) => {
    

    const fontSaol_Regular = new Promise((resolve) => {
        new FontFaceObserver("SaolDisplay-Regular").load().then(() => {
            resolve();
        })
    });

    const fontSaol_LightItalic = new Promise((resolve) => {
        new FontFaceObserver("SaolDisplay-LightItalic").load().then(() => {
            resolve();
        })
    })


    const fontSaol_Light = new Promise((resolve) => {
        new FontFaceObserver("SaolDisplay-Light").load().then(() => {
            resolve();
        })
    })

    // const fontOpenSans = new Promise((resolve) => {
    //     new FontFaceObserver("Open Sans").load().then(() => {
    //         resolve();
    //     })
    // })


    const preloadImages = new Promise((resolve, reject) => {

        const loader = new imagesLoaded(
            document.querySelectorAll("img"),
            {background: true},
            resolve
        )


        let count = 0;

        loader.on("progress" , () => {
            count++;
            
            let percentage = Math.ceil((count * 100) / loader.images.length);

            gsap.to(".progress-bar__container .bar", {
                width: percentage + "%",
                duration: 0.4,
                ease: Power3.easeOut
            })

        })


    })


    let allAssetsLoaded = [
        fontSaol_Regular,
        fontSaol_LightItalic,
        fontSaol_Light,
        // fontOpenSans,
        preloadImages
    ]




    Promise.all(allAssetsLoaded).then(() => {
        setTimeout(() => {
            if($etFn) {
                $etFn(true);
            }
        }, 500);
    })

}