"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'

function Provider({ children }) {

  const [user,setUser]=useState();
  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user }, error: userError }) => {
      if (userError) {
        console.error("Auth error:", userError);
        return;
      }

      if (!user) {
        console.log("⚠️ No user is logged in");
        return;
      }

      // 💥 Check if user already exists

      let { data: Users, error } = await supabase
        .from('Users')
        .select("*")
        .eq('email', user?.email);

      if (error) {
        console.error("Query error:", error);
        return;
      }

      console.log("Users:", Users);

      // 💥 If user does not exist → create new user

            if (Users?.length === 0) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user.user_metadata?.name,
            email: user.email,
            picture: user.user_metadata?.picture,
          }
        ]);


        if (error) {
          console.error("Insert error:", error);
        } else {
          console.log(data);
          setUser(data);
          return;
        }
      }

      setUser(Users[0]);
    
    
    });


  };

  return (
    <UserDetailContext.Provider value={{ user, setUser}}>
      <div>{children}</div>
    </UserDetailContext.Provider>  
  );
}

export default Provider;

export const useUser = () =>{
  const context = useContext(UserDetailContext);
  return context;
}