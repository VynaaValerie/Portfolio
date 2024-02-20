
export interface Tag {
    id: string
    name: string
    icon: string
    color: string
    rgb: string
  }
  
  export interface Print {
    id: string
    img: string
    name: string
    description: string
  }
  
  export interface Education {
    icon: string
    banner: string
    imgUrl: string
    id: string
    title: string
    description: string
    type: string
    web: string
    url: string
    tags: Tag[]
    print: Print[]
    year: string
    status: string
    video: string
    backgroundImage: string
  }