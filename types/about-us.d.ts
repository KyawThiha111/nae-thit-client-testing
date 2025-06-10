type TypeOfAboutUsBanner = {
  success: boolean;
  data: {
    title: string;
    about: string;
    images: {
      bannerbgimg: string;
      backgroundblogimg: string;
      homepageblogimg:string
    };
    blog: {
      title: string;
      content: string;
    };
    homepageBlog:{
    title:string,
    content:string
    };
    introduction: string;
  };
};
