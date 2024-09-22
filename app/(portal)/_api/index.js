// import { tr } from "@faker-js/faker";
import { tr } from "@faker-js/faker";
import axios from "axios";

export const uploadServiceData = async (serviceData) => {
  try {
    const service = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/store/service`,
      serviceData
    );
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// get all services
export const getServices = async () => {
  try {
    const services = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services`,
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
      console.log({services});
      
    return services?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


// get all lazy loading services
export const getLazyLoadingServices = async (limit) =>{
  try {
    const resLazyService = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/lazyload/service?limit=${limit}`);
    return resLazyService.data;
  } catch (error) {
    console.log(error);
    return[];
  }
}


export const getServicesBySearch = async (search) => {
  try {
    const resItems = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/search/service?name=${search}`);
    return resItems;
  } catch (error) {
    console.log(error);
    return error;
  }
}


// get single service
export const getSingleService = async (id) => {
  try {
    const service = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// update service
export const updateAnService = async (id, updateData) => {
  try {
    const service = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`,
      updateData
    );
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getRecentNews = async () => {
  const recentNews = await fetch("http://localhost:3000/db/recent_news.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return recentNews?.news;
};

export const getSingleNews = async (id) => {
  const news = await fetch("http://localhost:3000/db/recent_news.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return news?.news?.filter((item) => item?.id == id);
};

export const getMenuLinks = async () => {
  const menuLinks = await fetch("http://localhost:3000/db/menuLinks.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return menuLinks?.links;
};

// upload feature  data api
export const uploadFeatureData = async (featureData) => {
  try {
    const feature = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/store`,
      featureData
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// get features by service id
export const getFeaturesByServiceId = async (serviceId) => {
  try {
    const features = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/feature-by-service-id/${serviceId}`
    );
    return features.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// delete features by feautes id

export const deleteFeature = async (id) => {
  try {
    const feature = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/${id}`
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateFeatureDataById = async (id, updateData) => {
  try {
    const feature = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/${id}`,
      updateData
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


// order post api
export const orderServiceApi = async (orderInfo)=>{
  try {
    const order = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/order/save`,
      orderInfo
    );
    return order.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// billing address post api

export const billingAddressPostApi = async (billingAddressInfo)=>{
  try {
    const billingAddress = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/order/billing-address/save`,
      billingAddressInfo
    );
    return billingAddress.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// payment post api
export const paymentPostApi = async (paymentInfo)=>{
  try {
    const paymentRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/payment/save`,paymentInfo);
    return paymentRes.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


// get all orders api 
export const getAllOrdersApi = async () =>{
  try {
    const orders = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all/orders`);
    return orders.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


// feadback review api
export const createReviewApi = async (reviewInfo)=>{
  try {
    const review = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/feedback/save`,
      reviewInfo
    );
    return review.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


// get all review by serviceId
export const getReviewByServiceId = async (serviceId) => {
  try {
    const reviews = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/review-by-service-id/${serviceId}`
    );
    return reviews.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};



/* login Api section here start */

export const loginApi = async (loginInfo)=>{
  try {
    const login = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      loginInfo
    );
    return login.data;
    
  } catch (error) {
    return [];
  }
}


/* slider api section here start */

export const getAllSliderApi = async () =>{
  try {
      const resSlider = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/active/sliders`)
      return resSlider.data;
  } catch (error) {
      console.log(error);
      return [];
  }
}

