const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const images = [
  {
    title: "Facere blanditiis ducimus facere.",
    image_url: "https://via.placeholder.com/640x480.png/005544?text=Animal+qui",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Ullam aperiam voluptatum molestias.",
    image_url:
      "https://via.placeholder.com/640x480.png/00eecc?text=Animal+autem",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Aliquid distinctio mollitia.",
    image_url: "https://via.placeholder.com/640x480.png/00aaee?text=Animal+est",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Et sint sunt.",
    image_url:
      "https://via.placeholder.com/640x480.png/0044dd?text=Animal+magni",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Sequi autem est sit.",
    image_url:
      "https://via.placeholder.com/640x480.png/003333?text=Animal+culpa",
    is_featured: true,
    rating: 2,
  },
  {
    title: "Adipisci autem distinctio.",
    image_url:
      "https://via.placeholder.com/640x480.png/001199?text=Animal+enim",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Ratione in quos.",
    image_url:
      "https://via.placeholder.com/640x480.png/000044?text=Animal+exercitationem",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Ad a iure.",
    image_url: "https://via.placeholder.com/640x480.png/009944?text=Animal+cum",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Dolores est.",
    image_url:
      "https://via.placeholder.com/640x480.png/002288?text=Animal+blanditiis",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Suscipit maxime vitae sint reiciendis.",
    image_url: "https://via.placeholder.com/640x480.png/00eebb?text=Animal+aut",
    is_featured: true,
    rating: 3,
  },
  {
    title: "Quidem molestiae eveniet architecto.",
    image_url:
      "https://via.placeholder.com/640x480.png/009944?text=Animal+sint",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Numquam quis at.",
    image_url:
      "https://via.placeholder.com/640x480.png/002288?text=Animal+omnis",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Ipsum corporis eum excepturi.",
    image_url:
      "https://via.placeholder.com/640x480.png/002299?text=Animal+voluptatem",
    is_featured: true,
    rating: 5,
  },
  {
    title: "Mollitia tempore vel.",
    image_url:
      "https://via.placeholder.com/640x480.png/0055ff?text=Animal+fuga",
    is_featured: true,
    rating: 1,
  },
  {
    title: "Dolorum non omnis suscipit.",
    image_url: "https://via.placeholder.com/640x480.png/0011aa?text=Animal+aut",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Dolorem ea facilis possimus.",
    image_url:
      "https://via.placeholder.com/640x480.png/00dd11?text=Animal+quidem",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Et ab molestiae nostrum.",
    image_url:
      "https://via.placeholder.com/640x480.png/0033aa?text=Animal+rerum",
    is_featured: true,
    rating: 3,
  },
  {
    title: "Officiis ipsum et.",
    image_url:
      "https://via.placeholder.com/640x480.png/005511?text=Animal+nemo",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Est eligendi ut voluptates.",
    image_url:
      "https://via.placeholder.com/640x480.png/0099dd?text=Animal+occaecati",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Et temporibus occaecati.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ee22?text=Animal+impedit",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Culpa incidunt sapiente.",
    image_url: "https://via.placeholder.com/640x480.png/002266?text=Animal+qui",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Labore quidem incidunt soluta.",
    image_url:
      "https://via.placeholder.com/640x480.png/0033cc?text=Animal+autem",
    is_featured: true,
    rating: 2,
  },
  {
    title: "Nobis asperiores in.",
    image_url:
      "https://via.placeholder.com/640x480.png/009955?text=Animal+similique",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Aut et libero.",
    image_url:
      "https://via.placeholder.com/640x480.png/0077dd?text=Animal+assumenda",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Libero velit dolores quod.",
    image_url:
      "https://via.placeholder.com/640x480.png/002211?text=Animal+cupiditate",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Fuga eligendi iusto.",
    image_url:
      "https://via.placeholder.com/640x480.png/007777?text=Animal+rerum",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Recusandae enim odit beatae.",
    image_url: "https://via.placeholder.com/640x480.png/0066ee?text=Animal+rem",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Quod dolorum est nihil.",
    image_url:
      "https://via.placeholder.com/640x480.png/00eebb?text=Animal+deserunt",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Omnis reiciendis inventore voluptatem.",
    image_url:
      "https://via.placeholder.com/640x480.png/007733?text=Animal+dolorem",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Illo cupiditate.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ff22?text=Animal+molestias",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Vel quos cumque error.",
    image_url: "https://via.placeholder.com/640x480.png/0066aa?text=Animal+rem",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Officia eos unde.",
    image_url:
      "https://via.placeholder.com/640x480.png/008822?text=Animal+vero",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Alias odit eum.",
    image_url:
      "https://via.placeholder.com/640x480.png/00aa66?text=Animal+consequuntur",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Est natus velit exercitationem.",
    image_url:
      "https://via.placeholder.com/640x480.png/0066cc?text=Animal+illo",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Saepe unde velit.",
    image_url:
      "https://via.placeholder.com/640x480.png/002233?text=Animal+illum",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Reiciendis dignissimos nihil ut.",
    image_url: "https://via.placeholder.com/640x480.png/0000aa?text=Animal+sed",
    is_featured: true,
    rating: 2,
  },
  {
    title: "Maxime sit non provident.",
    image_url: "https://via.placeholder.com/640x480.png/00ddee?text=Animal+sit",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Iure ut et.",
    image_url:
      "https://via.placeholder.com/640x480.png/001177?text=Animal+odit",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Accusantium ea laborum nulla.",
    image_url: "https://via.placeholder.com/640x480.png/00aa66?text=Animal+eum",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Veniam atque consequatur aliquam.",
    image_url:
      "https://via.placeholder.com/640x480.png/006611?text=Animal+dolore",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Perferendis voluptatem consequatur.",
    image_url:
      "https://via.placeholder.com/640x480.png/005522?text=Animal+optio",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Tenetur veniam molestiae explicabo.",
    image_url:
      "https://via.placeholder.com/640x480.png/0077cc?text=Animal+impedit",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Aut ullam eveniet.",
    image_url:
      "https://via.placeholder.com/640x480.png/00bb00?text=Animal+dolorum",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Nam accusamus est.",
    image_url:
      "https://via.placeholder.com/640x480.png/009966?text=Animal+aperiam",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Quod cumque quia perspiciatis.",
    image_url: "https://via.placeholder.com/640x480.png/00eeff?text=Animal+et",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Praesentium sed ut nulla.",
    image_url:
      "https://via.placeholder.com/640x480.png/006633?text=Animal+placeat",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Est quis aut consequatur.",
    image_url:
      "https://via.placeholder.com/640x480.png/007700?text=Animal+nesciunt",
    is_featured: true,
    rating: 2,
  },
  {
    title: "Eum voluptate vitae.",
    image_url:
      "https://via.placeholder.com/640x480.png/00bb11?text=Animal+vero",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Inventore fugiat.",
    image_url:
      "https://via.placeholder.com/640x480.png/00dd99?text=Animal+voluptas",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Qui saepe laborum.",
    image_url:
      "https://via.placeholder.com/640x480.png/009977?text=Animal+repellat",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Soluta rerum aut error.",
    image_url:
      "https://via.placeholder.com/640x480.png/0077bb?text=Animal+dolorum",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Repellendus delectus.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ff88?text=Animal+nihil",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Necessitatibus facilis dolores ex.",
    image_url: "https://via.placeholder.com/640x480.png/006699?text=Animal+ex",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Quod reiciendis non enim.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ff77?text=Animal+quos",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Ipsum ut nisi.",
    image_url:
      "https://via.placeholder.com/640x480.png/007711?text=Animal+possimus",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Eius ut quam quod sint.",
    image_url: "https://via.placeholder.com/640x480.png/00bb11?text=Animal+nam",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Debitis quis dolores qui.",
    image_url: "https://via.placeholder.com/640x480.png/00bb88?text=Animal+ut",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Necessitatibus aut delectus.",
    image_url: "https://via.placeholder.com/640x480.png/00bb11?text=Animal+quo",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Unde saepe facere ad.",
    image_url:
      "https://via.placeholder.com/640x480.png/004488?text=Animal+dolore",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Praesentium in.",
    image_url: "https://via.placeholder.com/640x480.png/0011bb?text=Animal+est",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Ipsam nulla quis.",
    image_url: "https://via.placeholder.com/640x480.png/0022aa?text=Animal+est",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Aspernatur quisquam qui aliquid.",
    image_url: "https://via.placeholder.com/640x480.png/00bb99?text=Animal+id",
    is_featured: true,
    rating: 3,
  },
  {
    title: "Quo exercitationem exercitationem ipsum maiores.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ee66?text=Animal+provident",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Placeat dolore recusandae veritatis.",
    image_url:
      "https://via.placeholder.com/640x480.png/008833?text=Animal+soluta",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Laboriosam tempore autem qui.",
    image_url:
      "https://via.placeholder.com/640x480.png/0000ee?text=Animal+officia",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Sint omnis cupiditate.",
    image_url:
      "https://via.placeholder.com/640x480.png/008877?text=Animal+perspiciatis",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Placeat optio sunt.",
    image_url:
      "https://via.placeholder.com/640x480.png/00cccc?text=Animal+repudiandae",
    is_featured: true,
    rating: 4,
  },
  {
    title: "Iusto dolor et id.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088cc?text=Animal+ipsa",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Qui et accusantium.",
    image_url:
      "https://via.placeholder.com/640x480.png/007722?text=Animal+nesciunt",
    is_featured: true,
    rating: 5,
  },
  {
    title: "Voluptatibus voluptatem libero eos.",
    image_url:
      "https://via.placeholder.com/640x480.png/000011?text=Animal+consequatur",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Ad aspernatur molestiae quaerat.",
    image_url:
      "https://via.placeholder.com/640x480.png/007777?text=Animal+amet",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Iusto ut ipsa.",
    image_url:
      "https://via.placeholder.com/640x480.png/003355?text=Animal+nulla",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Atque fuga excepturi repellat.",
    image_url: "https://via.placeholder.com/640x480.png/0000ff?text=Animal+eos",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Labore similique sed.",
    image_url:
      "https://via.placeholder.com/640x480.png/003355?text=Animal+assumenda",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Nihil ex dolores nihil.",
    image_url:
      "https://via.placeholder.com/640x480.png/0077bb?text=Animal+quae",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Omnis suscipit suscipit et.",
    image_url:
      "https://via.placeholder.com/640x480.png/001133?text=Animal+molestiae",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Ut quas commodi.",
    image_url:
      "https://via.placeholder.com/640x480.png/006666?text=Animal+consequuntur",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Doloribus nobis non ducimus reiciendis.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ffee?text=Animal+fuga",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Fugit quae.",
    image_url:
      "https://via.placeholder.com/640x480.png/0088ee?text=Animal+quae",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Occaecati commodi hic possimus.",
    image_url:
      "https://via.placeholder.com/640x480.png/004477?text=Animal+velit",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Laboriosam veritatis totam voluptatem.",
    image_url:
      "https://via.placeholder.com/640x480.png/003344?text=Animal+aliquam",
    is_featured: false,
    rating: 4,
  },
  {
    title: "Pariatur odio sint suscipit.",
    image_url: "https://via.placeholder.com/640x480.png/00eedd?text=Animal+est",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Adipisci aperiam debitis.",
    image_url: "https://via.placeholder.com/640x480.png/001133?text=Animal+ex",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Modi expedita voluptatibus eum.",
    image_url:
      "https://via.placeholder.com/640x480.png/003388?text=Animal+saepe",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Eligendi ea dolor.",
    image_url:
      "https://via.placeholder.com/640x480.png/0055aa?text=Animal+rerum",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Exercitationem adipisci dolorem.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ccaa?text=Animal+debitis",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Consequatur atque nihil velit.",
    image_url:
      "https://via.placeholder.com/640x480.png/004444?text=Animal+fuga",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Minus eveniet laudantium.",
    image_url:
      "https://via.placeholder.com/640x480.png/002266?text=Animal+eaque",
    is_featured: true,
    rating: 3,
  },
  {
    title: "Aut cum ut non.",
    image_url:
      "https://via.placeholder.com/640x480.png/00cc33?text=Animal+molestiae",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Veniam molestiae velit enim.",
    image_url:
      "https://via.placeholder.com/640x480.png/00dd77?text=Animal+sint",
    is_featured: true,
    rating: 1,
  },
  {
    title: "Sed ut ea corporis.",
    image_url: "https://via.placeholder.com/640x480.png/007777?text=Animal+qui",
    is_featured: true,
    rating: 5,
  },
  {
    title: "Enim veritatis mollitia ut sunt.",
    image_url:
      "https://via.placeholder.com/640x480.png/0022ff?text=Animal+dolorum",
    is_featured: true,
    rating: 5,
  },
  {
    title: "Provident odit nostrum.",
    image_url: "https://via.placeholder.com/640x480.png/0055dd?text=Animal+sed",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Deserunt tenetur.",
    image_url:
      "https://via.placeholder.com/640x480.png/000099?text=Animal+sequi",
    is_featured: true,
    rating: 1,
  },
  {
    title: "Blanditiis nobis occaecati expedita.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ee55?text=Animal+necessitatibus",
    is_featured: false,
    rating: 1,
  },
  {
    title: "Minima consequuntur non atque.",
    image_url:
      "https://via.placeholder.com/640x480.png/00ee22?text=Animal+nobis",
    is_featured: false,
    rating: 5,
  },
  {
    title: "Aut esse eius quod.",
    image_url:
      "https://via.placeholder.com/640x480.png/004411?text=Animal+voluptas",
    is_featured: false,
    rating: 3,
  },
  {
    title: "Repellat sit.",
    image_url: "https://via.placeholder.com/640x480.png/0099dd?text=Animal+eum",
    is_featured: false,
    rating: 2,
  },
  {
    title: "Recusandae et magnam excepturi nihil.",
    image_url:
      "https://via.placeholder.com/640x480.png/005588?text=Animal+tempora",
    is_featured: true,
    rating: 1,
  },
  {
    title: "Ut at ad.",
    image_url:
      "https://via.placeholder.com/640x480.png/000044?text=Animal+tempora",
    is_featured: true,
    rating: 1,
  },
];

app.use(express.json());
app.use(cors());

app.get("/api/images", (req, res) => {
  res.json({ images });
});

app.get("/api/images/rating/:rating", (req, res) => {
  const rating = parseInt(req.params.rating, 10);
  const filteredImages = images.filter((image) => image.rating === rating);
  res.json({ images: filteredImages });
});

app.get("/api/images/featured", (req, res) => {
  const featuredImages = images.filter((image) => image.is_featured);
  res.json({ images: featuredImages });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
