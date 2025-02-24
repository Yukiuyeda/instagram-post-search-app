"use client";

import { supabase } from "@/utils/supabase";
import { FormEvent, useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [instagramId, setInstagramId] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    //フォーム送信時のデフォルト（ページのリロード）を防ぐ
    e.preventDefault();

    //SupabaseのsignUpメソッドを使ってユーザー登録。emailとpasswordを引数にとる
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: "https://localhost:3000" },
    });

    //エラーが発生した場合エラーアラートを表示
    if (error) {
      alert("登録に失敗しました");
    } else {
      setEmail("");
      setPassword("");
      alert("確認メールを送信しました。");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#FFFBDA]">
      <form onSubmit={handleSubmit} className="w-90% bg-gray-200 p-[32px]">
        <h2 className="text-center text-gray-700">新規登録</h2>
        <div className="flex flex-col justify-evenly h-[400px]">

          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-solid rounded-[4px] border-[#FFEC9E] bg-gray-100 p-[5px]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="instagramId">Instagram ID</label>
            <input
              type="text"
              id="instagramId"
              name="instagramId"
              placeholder="IDを入力"
              value={instagramId}
              required
              onChange={(e) => {
                setInstagramId(e.target.value);
              }}
              className="border-solid rounded-[4px] border-[#FFEC9E] bg-gray-100 p-[5px]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="●●●●●●●●●"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-solid rounded-[4px] border-[#FFEC9E] bg-gray-100 p-[5px]"
            />
          </div>
          <button type="submit">新規登録する</button>
        </div>
      </form>
    </div>
  );
}
