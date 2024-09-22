export const CounterServiceAPi = async () => {
  try {
    const countRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/types/counting`,{
        cache: "no-cache",
      }
    );
    return countRes.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
