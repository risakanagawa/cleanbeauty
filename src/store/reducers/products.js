import img1 from "../../img/products/cleanser.jpg";
import img2 from "../../img/products/facialoil.jpg";
import img3 from "../../img/products/lipcream.jpg";

import img4 from "../../img/products/lipcream.jpg";
import img5 from "../../img/products/hydrationmist.jpg";
import img6 from "../../img/products/detoxmask.jpg";
import img7 from "../../img/products/facialcream.jpg";
import img8 from "../../img/products/skincare-starter.jpg";
//makeup img
import img9 from "../../img/products/foundation.jpg";
import img10 from "../../img/products/blush.jpg";
import img11 from "../../img/products/mascara.jpg";
import img12 from "../../img/products/lip.jpg";
import img13 from "../../img/products/primer.jpg";
import img14 from "../../img/products/makeup-stater.jpg";
import img15 from "../../img/products/shadow.jpg";
//bodycare
import img16 from "../../img/products/bodylotion.jpg";
import img17 from "../../img/products/body-stater.jpg";
//others
import img18 from "../../img/products/blushs.jpg";
import img19 from "../../img/products/pouch.jpg";
import img20 from "../../img/products/laundry-starter.jpg";
import img21 from "../../img/products/wipes.jpg";
import img22 from "../../img/products/cleaningspray.jpg";
import img23 from "../../img/products/avocadosocks.jpg";

const initialState = [
  {
    id: 1,
    name: "Gentle Gel Cleanser",
    price: 12,
    discription:
      "This is a gentle cleanser. In porta nec urna et mattis. Praesent feugiat ornare ante vel placerat. Aliquam feugiat dictum ex, cursus interdum ligula condimentum a. Duis nec rhoncus dui. Vivamus sem ante, feugiat in magna eget, gravida lobortis lorem. Curabitur malesuada sodales massa, ut commodo odio pharetra eu. Pellentesque ac velit non libero semper lobortis at vel mi. Quisque tincidunt quam a nisi dictum, ut volutpat urna pretium. Aenean fermentum, nibh sit amet pellentesque vehicula, lorem nulla feugiat metus, ut hendrerit sapien mauris a justo.",
    category: "skincare",
    img: img1,
    quantity: 1,
  },
  {
    id: 2,
    name: "Beauty Facial Oil",
    price: 20,
    discription:
      "This is a facial oil which Aenean scelerisque vulputate porta. Duis congue, eros ut tincidunt auctor, odio enim pulvinar urna, eu auctor nunc tellus quis felis. Suspendisse egestas at sem id interdum. Phasellus nec convallis odio, in suscipit felis.",
    category: "skincare",
    img: img2,
    quantity: 1,
  },
  {
    id: 3,
    name: "Moist Lip Cream",
    price: 9,
    discription:
      "This is Lip balm Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus.",
    category: "skincare",
    img: img3,
    quantity: 1,
  },
  {
    id: 4,
    name: "Beaty Serum",
    price: 10,
    discription:
      "Beauty Serum Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus.",
    category: "skincare",
    img: img4,
    quantity: 1,
  },
  {
    id: 5,
    name: "Hydration Mist",
    price: 12,
    discription:
      "Hydration Mist Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus. ",
    category: "skincare",
    img: img5,
    quantity: 1,
  },
  {
    id: 6,
    name: "Detox Clay Face Mask",
    price: 22,
    discription:
      "Great facemask Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus. ",
    category: "skincare",
    img: img6,
    quantity: 1,
  },
  {
    id: 7,
    name: "Moisturising Face Cream",
    price: 22,
    discription:
      "Super moisturising cream for your Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus.",
    category: "skincare",
    img: img7,
    quantity: 1,
  },
  {
    id: 8,
    name: "Skincare starter Set",
    price: 35,
    discription:
      "Perfect set for Clean Beauty begginers! Nunc a lacinia enim. Donec vulputate, quam nec posuere tincidunt, ipsum magna ultrices metus, sed hendrerit sapien dolor eget tellus.",
    category: "skincare",
    img: img8,
    quantity: 1,
  },
  {
    id: 9,
    name: "Natural Skin Glow Foundation",
    price: 26,
    discription:
      "Natural looking foundation Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    color: [
      { id: "1", style: "light-shade", color: "#ffdbac" },
      {
        id: "2",
        style: "warm medium shade",
        color: "#f1c27d",
      },
      {
        id: "3",
        style: "medium neutral shade",
        color: "#e0ac69",
      },
      { id: "4", style: "deep shade", color: "#c68642" },
      { id: "5", style: "rich shade", color: "#8d5524" },
    ],
    category: "makeup",
    img: img9,
    quantity: 1,
  },
  {
    id: 10,
    name: "Natural Skin Glow Blush",
    price: 23,
    discription:
      "Beautiful blush for your Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    color: [
      { id: "1", style: "Standard", color: "#DF5D86" },
      { id: "2", style: "Chic", color: "#E27092" },
      { id: "3", style: "Charm", color: "#EB92A9" },
      { id: "4", style: "Metalic", color: "#F1ABB9" },
      { id: "5", style: "Mystic", color: "#D14F7B" },
    ],
    category: "makeup",
    img: img10,
    quantity: 1,
  },
  {
    id: 11,
    name: "Natural GEl Mascara",
    price: 23,
    discription:
      "Waterproof natural gel mascara that Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    color: [{ id: "1", style: "Black", color: "#000000" }],
    category: "makeup",
    img: img11,
    quantity: 1,
  },
  {
    id: 12,
    name: "Natural Crayon lip",
    price: 21,
    discription:
      "Our signiture crayon lips are Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    color: [
      { id: "1", style: "Standard", color: "#DF5D86" },
      { id: "2", style: "Chic", color: "#E27092" },
      { id: "3", style: "Charm", color: "#EB92A9" },
      { id: "4", style: "Metalic", color: "#F1ABB9" },
      { id: "5", style: "Mystic", color: "#D14F7B" },
    ],
    category: "makeup",
    img: img12,
    quantity: 1,
  },
  {
    id: 13,
    name: "Natural Primer",
    price: 23,
    discription:
      "Light texture primer Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "makeup",
    img: img13,
    quantity: 1,
  },
  {
    id: 14,
    name: "Clean Beauty Makeup Starter Kit",
    price: 23,
    discription:
      "Great package for those Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "makeup",
    img: img14,
    quantity: 1,
  },
  {
    id: 15,
    name: "Glitter Eyeshadow Palette",
    price: 19,
    discription:
      "Brilliant eyeshadow pallete Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "makeup",
    img: img15,
    quantity: 1,
  },
  {
    id: 16,
    name: "Body Lotion",
    price: 15,
    discription:
      "Light body lotion is your Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "bodycare",
    img: img16,
    quantity: 1,
  },
  {
    id: 17,
    name: "Bodycare Special Starter",
    price: 40,
    discription:
      "New to bodycare? This is the right Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "bodycare",
    img: img17,
    quantity: 1,
  },
  {
    id: 18,
    name: "Makeup Brush set",
    price: 30,
    discription:
      "You need a natural brush for your skin Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img18,
    quantity: 1,
  },
  {
    id: 19,
    name: "Makeup Pouch",
    price: 23,
    discription:
      "Great size Pouch for carrying our Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img19,
    quantity: 1,
  },
  {
    id: 20,
    name: "Sastainable Landry Set",
    price: 35,
    discription:
      "Natural, sastainable laundry set for Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img20,
    quantity: 1,
  },
  {
    id: 21,
    name: "Gentle Wipes",
    price: 8,
    discription:
      "This soft wipes for Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img21,
    quantity: 1,
  },
  {
    id: 22,
    name: "Cleaning spray",
    price: 23,
    discription:
      "Multi-purpose spray for Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img22,
    quantity: 1,
  },
  {
    id: 23,
    name: "Avocado Socks",
    price: 13,
    discription:
      "Cute Avocado socks for you! Fusce imperdiet nisi a velit gravida, et vestibulum felis laoreet. Nullam lacinia, augue non lacinia maximus, velit sem gravida massa, sit amet porta arcu quam feugiat augue. Duis vitae pulvinar massa.",
    category: "others",
    img: img23,
    quantity: 1,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
