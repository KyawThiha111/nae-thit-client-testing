"use client"

import { useTeammember } from "@/hooks/api/teammember"
import { useLangStore } from "@/hooks/useLangStore"
import { useEffect } from "react";
import Image from "next/image";
export default function TeamMember(){
      const {lang} = useLangStore();
      const {data:TeamMemberData,isLoading:memberLoading, refetch:refetchMember} = useTeammember({lang})
      useEffect(()=>{
       refetchMember()
      },[lang])
      if (memberLoading) {
        return (
          <>
            <section className="relative bg-gray-200 text-white py-24 h-[200px]"></section>
    
            {/* About Description */}
            <section className="py-16 bg-white" id="background">
              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className=" min-h-[200px] bg-gray-200"></div>
                <div className=" min-h-[200px] lg:h-auto bg-gray-200 rounded-lg"></div>
              </div>
            </section>
          </>
        );
      }
      if(!TeamMemberData?.members){
        return <p>Data not found</p>
      }
      return(
       <div>
         <section className="py-16 bg-gray-50" id="our-team">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Meet The <span className=" text-primary">Team</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TeamMemberData.members.map((member, index) => (
                      <div
                        key={index}
                        className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={500}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-secondary font-medium my-2">
                            {member.position}
                          </p>
                          {/* <p className="text-gray-600">{member.bio}</p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
       </div>
    )
}