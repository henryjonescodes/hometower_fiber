 //Scene settings
 export const sceneSettings = {
    rotationSpeed: .00025,
    tipRotationSpeed: .005,
    inactiveTime: 20,
    screenWidths: {
        standard: 1400,
        mobile: 800,
    },
    fov:{
        widescreen: 45,
        standard: 65,
        mobile: 75
    },
    animationDurations: { //Animation durations in miliseconds
        moveFloor: 2000,
        zeroRotation: 1500,
        changeFloor: 2000,
        resetCamera: 2000,
        clickFocus: 2000,
        updateFov: 3000,
        intro: 5000,
    },
    water: {
        oceanColor: 0x001e0f,
        oceanSunColor: 0x333333,
        distortionScale: 2.5,
        timeModifier: 320
    }
 }
 
 
 //Camera settings
 export const scenes = {
    Floor4_Clickable_Drums:{
        cameraPositionX: 0.8773765760728143,
        cameraPositionY: 42.64213871300854,
        cameraPositionZ: -6.7331822316975165,
        fov: 45,
        targetx: 6.959,
        targety: 42.608,
        targetz: -6.134,
        content: {
            title: "2005 Ludwig Drum Kit",
            body: "Drumming has always been a major hobby. I don't play with a group at the moment, but I love playing along to my favorite music and jamming out."
        }
    },
    Floor4_Clickable_Nook:{
        cameraPositionX: -0.07687130326844915,
        cameraPositionY: 42.92862167225454,
        cameraPositionZ: 6.245485898592668,
        fov: 45,
        targetx: -8.638,
        targety: 42.608,
        targetz: 5.475,
        content: {
            title: "Reading Nook",
            body: "On my bookshelf you'll find a lot of science-fiction. My favorite series at the moment is The Expanse by James S.A. Corey, which fits well next to other favorites including Ender's Game, The Martian, and Ready Player One (although its sequel was dissapointing). My favorite single book of this year is The Anthroposcene Reviewed by John Green."
        }
    },
    Floor4_Clickable_Desk:{
        cameraPositionX: -8.16917197449256,
        cameraPositionY: 42.949361472089016,
        cameraPositionZ: -4.879401852203502,
        fov: 45,
        targetx: -6.1,
        targety: 42.559,
        targetz: -7.895,
        content: {
            title: "Workhorse",
            body: "I spend most of my time lately working on digital art projects in Blender and web development projects using React and Three.js. It turns out that if you build a computer for rendering its pretty good at games...."
        }
    },
    Floor3_Clickable_Acomplices:{
        cameraPositionX: 3.043798085974042,
        cameraPositionY: 35.28954205740364,
        cameraPositionZ: -12.525289428836645,
        fov: 45,
        targetx: 0,
        targety: 34,
        targetz: 2,
        content: {
            title: "Accomplices - 2018",
            body: "My parents at a particuarly scenic monument valley rest stop, my biggest supporters."
        }
    },
    Floor3_Clickable_BlueHaze:{
        cameraPositionX: 2.471026592252894,
        cameraPositionY: 35.37781500055371,
        cameraPositionZ: 2.118975912395376,
        fov: 45,
        targetx: 7.772,
        targety: 34.934,
        targetz: 7.454,
        content: {
            title: "Blue Haze - 2015",
            body: "Hurricane Ridge in Olympic National Park"
        }
    },
    Floor3_Clickable_Graduation:{
        cameraPositionX: -1.927542198269916,
        cameraPositionY: 34.88953982870003,
        cameraPositionZ: -1.828419163495437,
        fov: 45,
        targetx: -8.262,
        targety: 35.176,
        targetz: -7.504,
        content: {
            title: "Graduation - 2021",
            body: "I was lucky enough to pose with the greatest 3D artist I know before sucess stole her time."
        }
    },
    Floor3_Clickable_HiddenWorlds:{
        cameraPositionX: -11.62155483418708,
        cameraPositionY: 35.38800281290143,
        cameraPositionZ: -7.215452779154688,
        fov: 45,
        targetx: 13.396,
        targety: 33.449,
        targetz: 2,
        content: {
            title: "Hidden Worlds - 2015",
            body: "One of the first photos I took that got me deeply excited about photography: the tiny realms of Maine's great pines."
        }
    },
    Floor3_Clickable_Home:{
        cameraPositionX: 9.61799105794982,
        cameraPositionY: 35.95111485872807,
        cameraPositionZ: 8.122425534400904,
        fov: 45,
        targetx: 0,
        targety: 34,
        targetz: 2,
        content: {
            title: "Home - 2016",
            body: "Portland Maine from the water on an exceptionally foggy day."
        }
    },
    Floor3_Clickable_Lombard:{
        cameraPositionX: 1.2722498915882987,
        cameraPositionY: 35.48618818187341,
        cameraPositionZ: -4.924293617077119,
        fov: 45,
        targetx: 10.579,
        targety: 34.934,
        targetz: -4.177,
        content: {
            title: "Lombard St. - 2021",
            body: "The prettiest house in the whole darn city (that I saw)."
        }
    },
    Floor3_Clickable_MixedMessages:{
        cameraPositionX: 11.202409523006576,
        cameraPositionY: 36.10464738454277,
        cameraPositionZ: -1.37192947483451,
        fov: 45,
        targetx: 1.512,
        targety: 33.746,
        targetz: -4.426,
        content: {
            title: "Mixed Messages - 2016",
            body: "Purple skies and new ways on the outskirts of Amsterdam"
        }
    },
    Floor3_Clickable_WorldsEdge:{
        cameraPositionX: 0.12869333488445744,
        cameraPositionY: 35.15604075526848,
        cameraPositionZ: -2.3206280947602824,
        fov: 45,
        targetx: 1.368,
        targety: 35.176,
        targetz: -11.233,
        content: {
            title: "World's Edge - 2016",
            body: "Mont Blanc looms in the distane as Ian stides into the unknown."
        }
    },
    Floor2_Clickable_BugLight:{
        cameraPositionX: -0.8686348260480123,
        cameraPositionY: 25.5095001813743,
        cameraPositionZ: 2.9471108962508348,
        fov: 45,
        targetx: 6.711,
        targety: 26.022,
        targetz: 7.454,
        content: {
            title: "Bug Light - 2021",
            body: "I initially planned to make a representation of Portland Maine in Three.js, although the effort proved too large for myself (and the software) to handle, I like to think it prompted some cool projects, including this model of Portland's iconic bug light."
        }
    },
    Floor2_Clickable_Moxie:{
        cameraPositionX: 0.31706004458066417,
        cameraPositionY: 24.789364107458244,
        cameraPositionZ: -2.9428268864600744,
        fov: 45,
        targetx: 9.11,
        targety: 24.483,
        targetz: -3.908,
        content: {
            title: "Moxie - 2022",
            body: "Named for my little sister, I modeled this cute boat while recently experimenting with new modeling techniques."
        }
    },
}

export const floors = {
    floor1:{
        cameraPositionX: 0,
        cameraPositionY: 8,
        cameraPositionZ: 30,
        fov: 45,
        targetx: 0,
        targety: 10,
        targetz: 2
    },
    floor2:{
        cameraPositionX: 0,
        cameraPositionY: 32,
        cameraPositionZ: 30,
        fov: 45,
        targetx: 0,
        targety: 26,
        targetz: 2
    },
    floor3:{
        cameraPositionX: 0,
        cameraPositionY: 40,
        cameraPositionZ: 30,
        fov: 45,
        targetx: 0,
        targety: 34,
        targetz: 2
    },
    floor4:{
        cameraPositionX: 0,
        cameraPositionY: 48,
        cameraPositionZ: 30,
        fov: 45,
        targetx: 0,
        targety: 42,
        targetz: 2
    },
    roof:{
        cameraPositionX: 0,
        cameraPositionY: 53.5,
        cameraPositionZ: 30,
        fov: 45,
        targetx: 0,
        targety: 50,
        targetz: 2
    } 
}

