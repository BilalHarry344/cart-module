import React, { useEffect, useState } from 'react';
import AppRoutes from './routes';
import ApiServices from './services/ApiServices';
import LocalServices from './services/LocalSerivces';

export default function AppRoot() {
  const [userState, setUserState] = useState(null);
  const [adminState, setAdminState] = useState(null);
  const [companyState, setCompanyState] = useState(null);

  useEffect(() => {
    const user = LocalServices.getUser();
    if (!!user) setUserProfile(user);
  }, []);

  const setUserProfile = async (user) => {
    const userProfile = await getUserProfile(user.userId);
    setUserState({ role: user.role, ...userProfile });
  };

  //?==========================================================================?//
  //!                               Auth handlers                              !//
  //?==========================================================================?//

  const auth = () => {
    const register = (form, callback) => {
      ApiServices.sharedInstance
        .registerUser(form)
        .then((res) => callback(res, 'success'))
        .catch((error) => callback(error, 'error'));
    };

    const signin = async (credentials) => {
      try {
        const userAuth = await getUser(credentials);
        const userProfile = await getUserProfile(userAuth.userId);
        const userObject = { role: userAuth.role, ...userProfile };

        setUserState(userObject);
        return userObject.role;
      } catch (error) {
        throw error;
      }
    };

    const updateProfile = async (formData, callback) => {
      try {
        const successMessage = await updateUserProfile(formData);
        const userProfile = await getUserProfile(userState.id);

        setUserState({ role: userState.role, ...userProfile });
        callback(successMessage);
      } catch (error) {
        console.log('update profile error ->', error);
      }
    };

    const changePassword = async (formData, callback) => {
      ApiServices.sharedInstance
        .updatePassword(formData)
        .then((res) => callback(res, 'success'))
        .catch((error) => callback(error, 'error'));
    };

    const signOut = () => {
      setUserState(null);
      setAdminState(null);
      LocalServices.signOut();
    };

    return {
      state: userState,
      register,
      signin,
      updateProfile,
      changePassword,
      signOut,
    };
  };

  //?==========================================================================?//
  //!                              Admin handlers                              !//
  //?==========================================================================?//

  const admin = () => {
    const setAllCompanies = () => {
      ApiServices.sharedInstance.adminGetAllComponies().then((res) => {
        setAdminState({ ...adminState, allCompanies: res.data });
      });
    };

    const setCompanies = (filterModelForm) => {
      ApiServices.sharedInstance.adminFilterCompany(filterModelForm).then((res) => {
        setAdminState({
          ...adminState,
          companies: res.data.companyModel,
          totalCompanies: res.data.totalCompanies,
        });
      });
    };

    const setRequestedCompanies = (pageNumber) => {
      ApiServices.sharedInstance.adminGetRequestedCompanies(pageNumber).then((res) => {
        setAdminState({
          ...adminState,
          requestedCompanies: res.companyModel,
          totalRequestedCompanies: res.totalCompanies,
        });
      });
    };

    const setPendingReviews = (form) => {
      ApiServices.sharedInstance.getAllPendingReviews(form).then((res) => {
        setAdminState({ ...adminState, pendingReviews: res });
      });
    };

    const approveReview = (form, callback) => {
      const formData = { ...form, adminId: userState.id };
      ApiServices.sharedInstance
        .adminApproveReview(formData)
        .then((message) => callback(message, 'success'))
        .catch((message) => callback(message, 'error'));
    };

    return {
      state: adminState,
      setAllCompanies,
      setCompanies,
      setRequestedCompanies,
      setPendingReviews,
      approveReview,
    };
  };

  //?==========================================================================?//
  //!                             Company handlers                             !//
  //?==========================================================================?//

  const company = () => {
    const addCompany = async (form) => {
      const company = await ApiServices.sharedInstance.addCompayByUser(form);
      return company;
    };

    const getCompanyById = async (id) => {
      const company = await ApiServices.sharedInstance.getCompanyById(id);
      setCompanyState({ ...companyState, company: company });
    };

    const getCompanyOverview = async (id) => {
      const company = await ApiServices.sharedInstance.getCompanyOverview(id);
      setCompanyState({ ...companyState, companyOverview: company });
    };

    return { state: companyState, addCompany, getCompanyById, getCompanyOverview };
  };

  //?==========================================================================?//
  //!                             Review handlers                              !//
  //?==========================================================================?//

  const Review = () => {};

  const appProps = {
    auth: auth(),
    admin: admin(),
    company: company(),
    Review: Review(),
  };

  return (
    <React.Fragment>
      <AppRoutes {...appProps} />
    </React.Fragment>
  );
}

const getUser = (credentials) => {
  return ApiServices.sharedInstance.loginUser(credentials);
};

const getUserProfile = (userId) => {
  return ApiServices.sharedInstance.getUserProfile(userId);
};

const updateUserProfile = (formData) => {
  return ApiServices.sharedInstance.updateUserProfile(formData);
};
