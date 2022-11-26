import axios from "axios";

export async function uploadImage(files) {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "AppGym");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dkvp6ltvi/image/upload",
      formData
    );
    return response.data.url;
  } catch (error) {
    console.log(error.message);
  }
}
