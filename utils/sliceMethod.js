export function giveUserSliceObj(user) {
  const obj = {
    email: user?.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
    isAdmin: user?.isAdmin,
    isVerified: user?.isVerified,
    plan: user?.plan,
  };
  return obj
}
