type TypeOfAboutUsBanner = {
  success: boolean;
  data: {
    title: string;
    about: string;
    images: {
      bannerbgimg: string;
      backgroundblogimg: string;
    };
    blog: {
      title: string;
      content: string;
    };
    introduction: string;
  };
};
