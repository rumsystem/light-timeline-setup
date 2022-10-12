module.exports = {
  database: {
    host: "postgres",
    port: '5432',
    database: "all_in_one_timeline",
    user: "postgres",
    password: "e8b50fddddf04ee439f12851f5275222",
    dialect: "postgres"
  },
  polling: {
    limit: 80,
    maxIndexingUnloadedGroup: 3,
  },
  userRelation: {
    visible: false,
    seed: 'rum://seed?v=1&e=0&n=0&b=VgnuIxm5Qh-95XXaiJzHoQ&c=VNS6zB2q8nY7I0VACFjQBMt_39CbfNDPVsa9wcV2TXQ&g=Xgy7rXzvSkqiLPrdNMywMA&k=AzM8baghisDsIfLUSN4byI6cSBDIDLwjNN0QAWf6Tf5a&s=duPtge7HRkpZPHcItb920yxGaXbRENbY9veLwLOSGKMUJMistbqVM-qypl005SnnZFYyQYc3JZtdEHWhZSf_DAA&t=FxxSbaHgnrw&a=%E7%A7%8D%E5%AD%90%E7%BD%91%E7%BB%9C%E5%85%B3%E7%B3%BB&y=group_relations&u=http%3A%2F%2F45.120.216.187%3A9004%3Fjwt%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd0dyb3VwcyI6WyI1ZTBjYmJhZC03Y2VmLTRhNGEtYTIyYy1mYWRkMzRjY2IwMzAiXSwiZXhwIjoxODIyOTc2NTk0LCJuYW1lIjoiYWxsb3ctNWUwY2JiYWQtN2NlZi00YTRhLWEyMmMtZmFkZDM0Y2NiMDMwIiwicm9sZSI6Im5vZGUifQ.guyNlo8eicMM4llN4QCgwjnnuZ3iil_ciwTyomkOi8w'
  },
}
