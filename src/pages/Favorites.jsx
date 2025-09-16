// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import favoriteService from "../services/favoriteService";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favs = await favoriteService.getFavorites();
      setFavorites(favs);
    };
    fetchFavorites();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-lg font-semibold mb-4">Your Favorites</h2>
      <ul className="space-y-2">
        {favorites.map((f) => (
          <li key={f.id} className="p-2 border rounded">
            {f.title}
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default Favorites;
