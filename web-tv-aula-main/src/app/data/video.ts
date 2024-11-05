export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video01.mp4",
        imageURL: "image/image01.jpg",
        description: "The Empitness Machine - Linkin Park"
    },
    {
        videoURL: "video/video02.mp4",
        imageURL: "image/image02.jpg",
        description: "Not my Fault - Reneé Rapp"
    },
    {
        videoURL: "video/video03.mp4",
        imageURL: "image/image03.jpg",
        description: "Taste - Sabrina Carpenter"
    },
    {
        videoURL: "video/video04.mp4",
        imageURL: "image/image04.jpg",
        description: "Shameless - Camila Cabello"
    }
]
export default videos;
