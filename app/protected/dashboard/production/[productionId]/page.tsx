import prisma from "@/lib/db";

interface ProductionPageProps {
  params: { productionId: string };
}

export default async function ProductionDetailProjectPage({
  params,
}: ProductionPageProps) {
  const data = await prisma.productionProject.findUnique({
    where: {
      id: params.productionId,
    },
  });

  console.log(params);
  return (
    <div>
      <p>{data?.client}</p>
    </div>
  );
}
