import axios from "axios";

export const postImages = (formData,image,setImage) =>{
    return axios.post('https://api.cloudinary.com/v1_1/diapwgajv/image/upload', formData,
        {headers: { 
          'X-Requested-With': 'XMLHttpRequest' },
        }).then((response) => {
        const data = response.data;
        const fileURL = data.secure_url;
        let specificArrinObj = image.array;
        specificArrinObj.push(fileURL);
        const newobj = { ...image, specificArrinObj };
        setImage(newobj);
      });
  }

  