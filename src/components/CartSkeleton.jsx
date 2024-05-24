import Skeleton from "@mui/material/Skeleton";

const CartSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Skeleton variant="rectangle" animation="wave" width="50px" height={50} />
        <div className="w-full">
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="100%" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton variant="rectangle" animation="wave" width="50px" height={50} />
        <div className="w-full">
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="100%" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton variant="rectangle" animation="wave" width="50px" height={50} />
        <div className="w-full">
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="100%" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton variant="rectangle" animation="wave" width="50px" height={50} />
        <div className="w-full">
          <Skeleton variant="text" animation="wave" width="100%" />
          <Skeleton variant="text" animation="wave" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
