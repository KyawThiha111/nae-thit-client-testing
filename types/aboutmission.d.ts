type TypeOfMissionData = {
    _id:string,
    title:string,
    mission:string
}
type TypeOfAboutMission = {
  success: boolean,
  data:TypeOfMissionData[]
}