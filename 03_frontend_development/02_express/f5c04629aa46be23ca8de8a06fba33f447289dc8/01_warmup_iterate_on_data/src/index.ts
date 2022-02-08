// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

function getEmails(customer_data: CustomerType[]): string[] {
  const result = customer_data.map((element) => element.email);
  //console.log(result);
  return result;
}

export { getEmails };

//getEmails(customer_data);
