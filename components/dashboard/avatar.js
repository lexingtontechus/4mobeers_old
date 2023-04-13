/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";

const AvatarImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Avatar({ uid, url, size, onUpload }) {
  const supabase = useSupabaseClient();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error);
    }
  }

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uid}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mt-4">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt="Avatar"
          className="avatar image rounded-full mx-auto"
          width={150}
          height={150}
          style={{ height: size, width: size }}
        />
      ) : (
        <Image
          loader={AvatarImage}
          src="memberprofile.png"
          alt="Avatar"
          className="rounded-half mx-auto"
          width={150}
          height={150}
        />
      )}
      <div className="w-full bg-trueZinc-900 text-trueZinc-100 text-center py-4 ">
        <label className="button primary block" htmlFor="single">
          {uploading ? "Uploading ..." : "Upload Avatar"}
        </label>
        <input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
}
