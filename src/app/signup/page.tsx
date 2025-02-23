import { supabase } from "@/utils/supabase";
import { FormEvent, useState } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  //SupabaseのsugnUpメソッドを使ってユーザー登録。emailとpasswordを引数にとる
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert('登録に失敗しました')
  } else {
    setEmail('')
    setPassword('')
    alert('確認メールを送信しました。')
  }
};

const page = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
          />
        </div>
        <div>
          <label htmlFor="password"></label>
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
          />
        </div>
        <div>
          <button type="submit">新規登録する</button>
        </div>
      </form>
    </div>
  );
};
