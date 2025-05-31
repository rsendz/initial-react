import { useState, useEffect, useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const useItems = (token) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    if (!token) {
      setItems([]);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/items`, {
        headers: { Authorization: token },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const addItem = async (itemToAdd) => {
    if (!token) {
      setError("Authentication token is missing.");
      return null;
    }
    try {
      const response = await fetch(`${API_URL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(itemToAdd),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add item");
      }
      const newItem = await response.json();
      setItems((prevItems) => [...prevItems, newItem]);
      return newItem;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const delItem = async (itemId) => {
    if (!token) {
      setError("Authentication token is missing.");
      return false;
    }
    try {
      const response = await fetch(`${API_URL}/items/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete item");
      }
      setItems((prevItems) =>
        prevItems.filter((item) => String(item.id) !== String(itemId))
      );
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return { items, loading, error, addItem, delItem, fetchItems };
};

export default useItems;
