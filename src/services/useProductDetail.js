import { useEffect, useState } from "react";

const useProductDetail = (id) => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    console.log(123);
    const fetchProductDetail = async () => {
      try {
        console.log(`Fetching product detail for ID: ${id}`);
        const response = await fetch(`https://668977f20ea28ca88b8811ea.mockapi.io/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProductDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return { productDetail, loading, error };
};

export default useProductDetail;