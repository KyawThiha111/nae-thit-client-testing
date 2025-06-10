import { apiClient } from "@/libs/api-client";
export const AboutMissionApi = {
    getAboutMission:(params:{lang:string})=>
      apiClient.get<TypeOfAboutMission>('/api/pages/aboutmission',params)
}