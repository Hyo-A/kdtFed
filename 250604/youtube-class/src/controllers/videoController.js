import Video from "../models/video";

// export const home = (req, res) => {
//   Video.find({})
//     .then((videos) => console.log("video", videos))
//     .catch((error) => console.log("errors", error));
//   return res.render("home", { pageTitle: "Home", videos: [] });
//   console.log("start");
// };

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-Error", { error });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (video) {
    return res.render("404", { pageTitle: "Video Not Found" });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  // const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => {
  return res.send("Video Search");
};

export const deleteVideo = (req, res) => {
  return res.send("Video Delete");
};

export const getupload = (req, res) => {
  return res.render("Upload", { pageTitle: `Upload Video` });
};

export const postupload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  // const video = new Video({
  //   title,
  //   description,
  //   createdAt: Date.now(),
  //   hashtags: hashtags.split(",").map((word) => `#${word}`),
  //   meta: {
  //     views: 0,
  //     rating: 0,
  //   },
  // });
  try {
    await Video.create({
      title,
      description,
      // createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
