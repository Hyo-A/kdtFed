const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <>
      <div>book page {id}</div>
      <img src="/blueheart.gif" alt="blueheart" />
    </>
  );
};

export default Page;
