import axios from "axios";

export async function uploadUserImage(files) {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append('tags', `codeinfuse, medium, gist`);
  formData.append("upload_preset", "ml_default");
  formData.append('api_key', '528937882136667');
  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/diapwgajv/image/upload",
      formData,
      {headers: { 
        'X-Requested-With': 'XMLHttpRequest' },
      }
    );
    return response.data.url;
  } catch (error) {
    console.log(error.message);
  }
}