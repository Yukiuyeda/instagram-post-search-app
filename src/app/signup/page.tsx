import { supabase } from "@/utils/supabase";
import { useState } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const page = () => {
  return (
    <div>
      <form>
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
              setEmail(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
