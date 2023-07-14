import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import Step3 from './Step3';
import Step1 from './Step1';
import Step2 from './Step2';
import { BACK, NEXT, PLEASE_WAIT } from '../../../helpers/globalConstant';
import { useWindowSize } from '../../../helpers/useWindowSize';
import Loader from '../../common/loader/Loader';
import {
	fetchAllOurAdvocatesForDropdown,
	fetchCaseTypeForDropdown,
} from '../../../reducers/mastersReducers/mastersAction';
import {
	editCaseDetails,
	getCaseById,
	postCaseDetails,
} from '../../../reducers/caseReducers/caseAction';
import {
	convertDateFormat,
	showToastMessageFailure,
} from '../../../helpers/helperFunction';

export interface Props {
	getCaseTypeList: any;
	caseTypeList: any;
	caseTypeListLoading: any;
	addCase: any;
	editCase: any;
	getOurAdvocateList: any;
	caseDetailById: any;
	getCaseById: any;
	res: any;
	loading: any;
	error: any;
	caseDetailByIdLoading: any;
}

const Stepper: React.FC<Props> = ({
	caseTypeList,
	getCaseTypeList,
	caseTypeListLoading,
	addCase,
	editCase,
	getOurAdvocateList,
	caseDetailById,
	getCaseById,
	res,
	loading,
	error,
	caseDetailByIdLoading,
}) => {
	const steps = ['Step 1', 'Step 2', 'Step 3'];
	const [currentStep, setCurrentStep] = useState(0);
	const { isMobile, windowSize } = useWindowSize();
	const navigate = useNavigate();
	const params = useParams();
	const [intialFormValues, setIntitalFormValues] = useState({});

	useEffect(() => {
		if (params.id && caseDetailById) {
			caseTypeList &&
				setIntitalFormValues(getInitialValues(caseTypeList, caseDetailById));
		} else {
			caseTypeList && setIntitalFormValues(getInitialValues(caseTypeList[0]));
		}
	}, [caseDetailById, caseTypeList]);

	const setCaseClientObj = (case_Clients: any) => {
		return case_Clients?.map((caseClient: any) => {
			return {
				clientId: caseClient.clientId,
				caseId: caseClient.caseId,
				clientOfficerId: caseClient.clientOfficerId,
				clientOfficer: caseClient.clientOfficer,
				partyName: caseClient.partyName,
				partyNo: caseClient.partyNo,
				ourAdvocateId: caseClient.ourAdvocateId,
				ourAdvocate: caseClient.ourAdvocate,
			};
		});
	};

	// const getIsClientSideData = (value: any) => {
	//   if (caseTypeList && caseTypeList.length > 0)
	//     return caseTypeList.find((item: any) => {
	//       return Number(item.id) === Number(value);
	//     });
	// };

	const getInitialValues = (caseData: any, caseDetailById?: any) => {
		let caseForm = {
			caseTypeId: caseData?.id,
			caseNo: '',
			year: new Date().getFullYear(),
			isClientSide: true,
			leadAdvocateId: '',
			case_Clients: [
				{
					clientId: '',
					clientOfficerId: '',
					partyName: '',
					partyNo: '',
					ourAdvocateId: '',
				},
			],
			oppositeParty: '',
			partyName: '',
			partyNo: '',
			oppositeAdvocateId: '',
			caseTitle: '',
			districtId: '',
			talukaId: '',
			filing: {
				judgeId: '',
				nextDate: convertDateFormat(new Date().toLocaleDateString('en-GB')),
				nextStageId: '',
				nextStageRemarks: '',
				nextAdvocateId: '',
				nextDateRemarks: '',
			},
			filingDate: convertDateFormat(new Date().toLocaleDateString('en-GB')),
			filingStageId: '',
			filingStageRemarks: '',
			filingRemarks: '',
			caseFieldsDetails: {
				caption_1: '',
				caption_2: '',
				caption_3: '',
				caption_4: '',
				caption_5: '',
				caption_6: '',
				caption_7: '',
				caption_8: '',
				caption_9: '',
				caption_10: '',
			},
			caseNote: '',
			statusId: '',
			remarks: '',
		};
		if (caseDetailById) {
			caseForm = {
				...caseDetailById?.data,
				isClientSide: caseDetailById?.data?.isClientSide,
				case_Clients: setCaseClientObj(caseDetailById?.data?.case_Clients),
				districtId: caseDetailById?.data?.filing?.judge?.districtId,
				talukaId: caseDetailById?.data?.filing?.judge?.talukaId,
			};
		}
		return caseForm;
	};
	const step1Validate = Yup.object().shape({
		caseTypeId: Yup.string().required('Case Type is required'),
		caseNo: Yup.string().required('Case Number is required'),
		year: Yup.string().required('Year is required'),
		leadAdvocateId: Yup.string().required('Lead Advocate is required'),
		caseTitle: Yup.string().required('Case Title is required'),
		case_Clients: Yup.array()
			.of(
				Yup.object().shape({
					clientId: Yup.string().required('Client is required'),
					clientOfficerId: Yup.string().required(
						'Client Officer ID is required'
					),
					partyName: Yup.string().required('Party Name is required'),
					partyNo: Yup.string().required('Party Number is required'),
					ourAdvocateId: Yup.string().required('Our Advocate is required'),
				})
			)
			.required('Case Clients are required'),
		oppositeParty: Yup.string().required('Opposite Party is required'),
		partyName: Yup.string().required('Party Name is required'),
		partyNo: Yup.string().required('Party Number is required'),
		oppositeAdvocateId: Yup.string().required('Opposite Advocate is required'),
	});

	const step2Validate = Yup.object().shape({
		talukaId: Yup.string().required('Taluka is required'),
		districtId: Yup.string().required('District is required'),
		filingDate: Yup.string().required('Filling Date is required'),
		filingStageId: Yup.string().required('Filling Stage is required'),
		filingStageRemarks: Yup.string().required(
			'Filling Stage Remarks is required'
		),
		filingRemarks: Yup.string().required('Filling Remarks is required'),
		filing: Yup.object().shape({
			judgeId: Yup.string().required('Judge is required'),
			nextDate: Yup.string().required('Next Date is required'),
			nextStageId: Yup.string().required('Next Stage is required'),
			nextStageRemarks: Yup.string().required('Next Stage Remarks is required'),
			nextAdvocateId: Yup.string().required('Next Advocate is required'),
			nextDateRemarks: Yup.string().required('Next Date Remarks is required'),
		}),
	});
	const step3Validate = Yup.object().shape({
		remarks: Yup.string().required('Remarks is required'),
		caseNote: Yup.string().required('Case Note is required'),
		statusId: Yup.string().required('Status is required'),
	});

	function _renderStepContent(
		step: any,
		setFieldValue: any,
		values: any,
		touched: any,
		errors: any
	) {
		switch (step) {
			case 0:
				return (
					<Step1
						values={values}
						setFieldValue={setFieldValue}
						errors={errors}
						touched={touched}
					/>
				);
			case 1:
				return (
					<Step2
						setFieldValue={setFieldValue}
						errors={errors}
						touched={touched}
						values={values}
					/>
				);
			case 2:
				return (
					<Step3
						values={values}
						errors={errors}
						touched={touched}
						setFieldValue={setFieldValue}
					/>
				);
			default:
				return <div>Error</div>;
		}
	}

	const handlePrev = () => {
		setCurrentStep(Number(currentStep) === 0 ? currentStep : currentStep - 1);
	};

	useEffect(() => {
		getCaseTypeList();
		getOurAdvocateList();
	}, []);

	useEffect(() => {
		if (params.id) {
			getCaseById(params.id);
		}
	}, [params.id]);

	const onSubmit = async (values: any, setTouched: any) => {
		if (currentStep === 0) {
			setTouched({
				districtId: false,
				filing: {
					judgeId: false,
					nextDate: false,
					nextStageId: false,
					nextStageRemarks: false,
					nextAdvocateId: false,
					nextDateRemarks: false,
				},
				filingDate: false,
				filingStageId: false,
				filingStageRemarks: false,
				filingRemarks: false,
				caseFieldsDetails: {
					caption_1: false,
					caption_2: false,
					caption_3: false,
					caption_4: false,
					caption_5: false,
					caption_6: false,
					caption_7: false,
					caption_8: false,
					caption_9: false,
					caption_10: false,
				},
				caseNote: false,
				statusId: false,
				remarks: false,
			});
		} else if (currentStep === 1) {
			if (values?.filing?.judgeId === 0) {
				showToastMessageFailure('Select proper court');
			}
		} else if (currentStep === 2) {
			params.id ? editCase(values, navigate) : addCase(values, navigate);
		}
		if (currentStep !== 2) {
			if (currentStep === 1) {
				if (values?.filing?.judgeId !== 0) {
					setCurrentStep(currentStep + 1);
					setTouched({});
				}
			} else {
				setCurrentStep(currentStep + 1);
				setTouched({});
			}
		}
	};

	return (
		<div className="app-container contanier-xxl form-container">
			<div className="stepper stepper-pills stepper-column d-flex justify-content-center">
				<div className="my-5">
					<div className="card-body">
						<div className="d-flex justify-content-center">
							{isMobile ? (
								steps.map((label: string, index: any) => {
									return (
										<div
											key={index}
											className="stepper-item current"
											data-kt-stepper-element="nav"
										>
											<div className="stepper-wrapper">
												<div className="stepper-label-parent">
													<div
														className={`stepper-icon ${
															index < currentStep
																? 'bg-success'
																: Number(index) === Number(currentStep)
																? 'bg-primary'
																: 'bg-secondary'
														}`}
													>
														<span className="stepper-number">
															{index < currentStep ? (
																<i className="fa-solid fa-check text-white fs-4"></i>
															) : (
																index + 1
															)}
														</span>
													</div>
													<div className="stepper-label">
														<h3
															style={{ margin: '0' }}
															className={`stepper-title ${
																index < currentStep
																	? 'text-success'
																	: Number(index) === Number(currentStep)
																	? 'text-dark'
																	: 'text-gray-400'
															} text-center`}
														>
															{label}
														</h3>
													</div>
												</div>
												{index !== steps.length - 1 && (
													<div className="hr-line-parent">
														<hr
															style={{
																height: `${index < currentStep ? '2px' : ''}`,
															}}
															className={`stepper-hr ${
																index < currentStep
																	? 'bg-success border-success'
																	: 'bg-dark border-dark-300 border-dashed'
															}`}
														></hr>
													</div>
												)}
											</div>
										</div>
									);
								})
							) : (
								<div className="d-flex justify-content-center">
									{steps.map((label: string, index: any) => {
										return (
											<div
												className="stepper-item current "
												data-kt-stepper-element="nav"
											>
												<div className="stepper-wrapper">
													<div className="stepper-label-parent flex-row align-items-center d-flex">
														<div
															className={
																index < currentStep
																	? 'stepper-icon w-40px h-40px mx-1 bg-success'
																	: 'stepper-icon w-40px h-40px mx-1'
															}
														>
															<span className="stepper-number fs-5">
																{index < currentStep ? (
																	<i className="fa-solid fa-check text-white fs-4"></i>
																) : (
																	index + 1
																)}
															</span>
														</div>
														<div className="stepper-label">
															<h3
																className="stepper-title text-center"
																style={{ margin: '0px' }}
															>
																{label}
															</h3>
														</div>
														{index !== steps.length - 1 && (
															<div className="hr-line-parent">
																<hr
																	style={{
																		height: `${
																			index < currentStep ? '2px' : ''
																		}`,
																	}}
																	className={`stepper-hr ${
																		index < currentStep
																			? 'bg-success border-success'
																			: 'bg-dark border-dark-300 border-dashed'
																	}`}
																></hr>
															</div>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{isMobile && (
				<div className="progress h-2px w-100 bg-white">
					<div
						className="progress-bar bg-success"
						role="progressbar"
						style={{ width: `${currentStep * (100 / steps.length)}%` }}
					></div>
				</div>
			)}
			<div id="kt_account_profile_details" className="card collapse show">
				{(caseTypeListLoading || (params.id && caseDetailByIdLoading)) && (
					<Loader />
				)}
				{!caseTypeListLoading &&
					(params.id ? caseDetailById.success : true) &&
					caseTypeList && (
						<Formik
							enableReinitialize
							initialValues={intialFormValues}
							validationSchema={
								currentStep === 0
									? step1Validate
									: currentStep === 1
									? step2Validate
									: step3Validate
							}
							onSubmit={(values: any, { setTouched }: any) =>
								onSubmit(values, setTouched)
							}
							render={({
								errors,
								values,
								setFieldValue,
								isSubmitting,
								touched,
							}) => (
								<Form className="form">
									<>
										<div className="row mb-6">
											<div className="card-body add-post-card">
												{_renderStepContent(
													currentStep,
													setFieldValue,
													values,
													touched,
													errors
												)}
											</div>
											<div className="d-flex justify-content-end align-items-center gap-5 card-body py-0 add-post-card">
												<div>
													<button
														className={`${
															currentStep !== 0 ? 'btn btn-light' : 'hidden'
														}`}
														type="button"
														disabled={currentStep === 0}
														onClick={() => handlePrev()}
													>
														{BACK}
													</button>
												</div>
												<div>
													<button
														className="btn btn-primary"
														type={'submit'}
														// onClick={handleNextStep}
													>
														{isSubmitting && (
															<span
																className="indicator-progress"
																style={{ display: 'block' }}
															>
																{PLEASE_WAIT}
															</span>
														)}
														{!isSubmitting && (
															<>{currentStep === 2 ? 'Submit' : NEXT}</>
														)}
													</button>
												</div>
											</div>
										</div>
									</>
								</Form>
							)}
						/>
					)}
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		caseTypeListLoading: state.getCaseTypeForDropdownReducer.loading,
		caseTypeList: state.getCaseTypeForDropdownReducer.caseTypeList,

		caseDetailById: state.getCaseByIdCaseReducer.caseDetails,
		caseDetailByIdLoading: state.getCaseByIdCaseReducer.loading,

		res: state.addCaseReducer.res,
		loading: state.addCaseReducer.loading,
		error: state.addCaseReducer.loading,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getCaseTypeList: () => dispatch(fetchCaseTypeForDropdown()),
		addCase: (details: any, callback: Function) =>
			dispatch(postCaseDetails(details, callback)),
		editCase: (details: any, callback: Function) =>
			dispatch(editCaseDetails(details, callback)),
		getOurAdvocateList: () => dispatch(fetchAllOurAdvocatesForDropdown()),
		getCaseById: (id: any) => dispatch(getCaseById(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
