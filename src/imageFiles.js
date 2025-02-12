// importAll() and require.context was found by searching how to import all photos
// from a file in React. I followed this information:
// https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
const importAll = (arrayOfFiles) => {
    let images = {};
    arrayOfFiles.keys().forEach((item, index) => {
        images[item.replace('./', '')] = arrayOfFiles(item);
    });
    return images;
};

// Event #1 - Hosted for Get Coding on August 26, 2022
export const EventOneImages = importAll(require.context('./photos/GetCodingAug26-2022', false, /\.(png|jpe?g|svg)$/), 'lazy');

export const EventOneImageNames = Object.keys(EventOneImages);

// Event #2 - Hosted for NetBenefit & Get Coding on Sept 14, 2022
export const EventTwoImages = importAll(require.context('./photos/NetBenefit-Sept-14-2022', false, /\.(png|jpe?g|svg)$/), 'lazy');

export const EventTwoImageNames = Object.keys(EventTwoImages);

export const EventThreeImages = importAll(require.context('./photos/Mysa-Oct-13-2022', false, /\.(png|jpe?g|svg)$/), 'lazy');

export const EventThreeImageNames = Object.keys(EventThreeImages);

export const EventFourImages = importAll(require.context('./photos/NDevMar27-2023', false, /\.(png|jpe?g|svg)$/), 'lazy');

export const EventFourImageNames = Object.keys(EventFourImages);