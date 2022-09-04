import axios from "axios";

export const fetchCategories = async () => {
  const { data } = await axios.get("/api/categories");
  return data;
};

export const fetchTransactions = async (type: string) => {
  const { data } = await axios.get(`/api/transactions?type=${type}`);
  return data;
};
