import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Field } from 'formik';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';

import {
	fetchDistrictForDropdown,
	fetchStageDropdown,
} from '../../../reducers/mastersReducers/mastersAction';
import { NO_RECORDS_FOUND } from '../../../helpers/globalConstant';
import { fetchJudgeByTaluka } from '../../../reducers/mastersReducers/mastersAction';
import { convertDateFormat } from '../../../helpers/helperFunction';

interface Props {
	getDistrictList: any;
	districtList: any;
	getStageList: any;
	stageList: any;
	setFieldValue: any;
	getJudgeByTalukaId: any;
	judgeList: any;
	stageListLoading: any;
	errors: any;
	touched: any;
	ourAdvocateList: any;
	values: any;
	judgeListLoading: any;
}

const Step2 = ({
	getDistrictList,
	districtList,
	getStageList,
	setFieldValue,
	getJudgeByTalukaId,
	judgeList,
	stageList,
	ourAdvocateList,
	errors,
	touched,
	values,
	judgeListLoading,
}: Props) => {
	const params = useParams();
	const [startDate, setStartDate] = useState(new Date());
	const [nextDate, setNexttDate] = useState(new Date());
	const [talukaArr, setTalukaArr] = useState([]);
	const [courtArr, setCourtArr] = useState([]);

	useEffect(() => {
		getDistrictList();
		getStageList();
		if (params.id) {
			getJudgeByTalukaId(values?.filing?.judge?.talukaId);
		}
	}, []);
	const handleTaluka = (districtId: any) => {
		const findDistrict = districtList?.find((item: any) => {
			return Number(item.id) === Number(districtId);
		});
		setTalukaArr(findDistrict?.taluka);
	};

	useEffect(() => {
		if (params.id) {
			handleTaluka(values?.filing?.judge?.districtId);
		}
	}, [districtList]);

	useEffect(() => {
		setCourtArr(judgeList);
	}, [judgeList]);

	return (
		<>
			<div className="row mb-lg-6">
				<div className="col-lg-4">
					<label
						htmlFor="districtId"
						className="col-form-label fw-bold fs-6 required"
					>
						District
					</label>
					<div className="">
						<Field
							as="select"
							name="districtId"
							className={clsx('form-control bg-transparent form-select')}
							onChange={(e: any) => {
								setFieldValue('districtId', parseInt(e.target.value));
								setFieldValue('talukaId', '');
								setCourtArr([]);
								handleTaluka(e.target.value);
							}}
						>
							<option value={''} disabled>
								Select District
							</option>
							{!districtList?.length && <option>{NO_RECORDS_FOUND}</option>}
							{districtList?.map((list: any, i: any) => (
								<>
									{!params.id && list.isActive === true && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
									{params.id && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
								</>
							))}
						</Field>
						{touched?.districtId && errors?.districtId && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.districtId}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<label
						htmlFor="talukaId"
						className=" col-form-label fw-bold fs-6 required"
					>
						Taluka
					</label>

					<Field
						as="select"
						name="talukaId"
						className={clsx('form-control bg-transparent form-select')}
						onChange={(e: any) => {
							setFieldValue('talukaId', parseInt(e.target.value));
							setFieldValue('filing.judgeId', '');
							getJudgeByTalukaId(e.target.value);
						}}
					>
						<option value={''} disabled>
							Select Taluka
						</option>
						{!talukaArr?.length && <option>{NO_RECORDS_FOUND}</option>}
						{talukaArr?.map((list: any, i: any) => (
							<>
								{!params.id && list.isActive === true && (
									<option key={i} value={list.id}>
										{list.name}
									</option>
								)}
								{params.id && (
									<option key={i} value={list.id}>
										{list.name}
									</option>
								)}
							</>
						))}
					</Field>
					{touched.talukaId && errors.talukaId && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.talukaId}`}</span>
							</div>
						</div>
					)}
				</div>

				<div className="col-lg-4">
					<label
						htmlFor="courtId"
						className=" col-form-label fw-bold fs-6 required"
					>
						Court
					</label>
					<Field
						as="select"
						name="filing.judgeId"
						className={clsx('form-control bg-transparent form-select')}
						onChange={(e: any) => {
							setFieldValue('filing.judgeId', parseInt(e.target.value));
						}}
					>
						<option value={''} disabled>
							Select Court
						</option>
						{courtArr && courtArr.length > 0 ? (
							courtArr?.map((list: any, i: any) => (
								<>
									{!params.id && list.isActive === true && (
										<option key={i} value={list.id}>
											{list.forum} - {list.name}
										</option>
									)}
									{params.id && (
										<option key={i} value={list.id}>
											{list.forum} - {list.name}
										</option>
									)}
								</>
							))
						) : (
							<option>{NO_RECORDS_FOUND}</option>
						)}
					</Field>
					{touched?.filing?.judgeId && errors?.filing?.judgeId && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filing.judgeId}`}</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="row mb-lg-6">
				<div className="col-lg-4">
					<label
						htmlFor="filingDate"
						className="col-form-label fw-bold fs-6 required"
					>
						Date of Filling
					</label>
					<div className="">
						<DatePicker
							selected={startDate}
							className="form-control bg-transparent"
							onChange={(date: any, e: any) => {
								setStartDate(date);
								setFieldValue('filingDate', convertDateFormat(date));
							}}
							dateFormat="yyyy-MM-dd"
						/>
						{touched?.filingDate && errors?.filingDate && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.filingDate}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-4">
					<label
						htmlFor="filingStageId"
						className=" col-form-label fw-bold fs-6 required"
					>
						Filling Stage
					</label>

					<Field
						as="select"
						name="filingStageId"
						className={clsx('form-control bg-transparent form-select')}
						onChange={(e: any) => {
							setFieldValue('filingStageId', parseInt(e.target.value));
						}}
					>
						<option value={''} disabled>
							Select Stage
						</option>
						{stageList && stageList.length > 0 ? (
							stageList?.map((list: any, i: any) => (
								<>
									{!params.id && list.isActive === true && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
									{params.id && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
								</>
							))
						) : (
							<option>{NO_RECORDS_FOUND}</option>
						)}
					</Field>
					{touched?.filingStageId && errors?.filingStageId && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filingStageId}`}</span>
							</div>
						</div>
					)}
				</div>

				<div className="col-lg-4">
					<label
						htmlFor="filingStageRemarks"
						className=" col-form-label fw-bold fs-6 required"
					>
						Filling Stage Remarks
					</label>
					<Field
						placeholder="Filling Stage Remarks"
						type="text"
						name="filingStageRemarks"
						autoComplete="off"
						className={clsx('form-control bg-transparent')}
					/>
					{touched?.filingStageRemarks && errors?.filingStageRemarks && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filingStageRemarks}`}</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="row mb-lg-6">
				<label
					htmlFor="filingRemarks"
					className="col-form-label fw-bold fs-6 required"
				>
					Filling Remarks
				</label>
				<div className="">
					<Field
						placeholder="Filling Remarks"
						type="textarea"
						name="filingRemarks"
						autoComplete="off"
						className={clsx('form-control bg-transparent')}
					/>
					{touched?.filingRemarks && errors?.filingRemarks && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filingRemarks}`}</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="row mb-lg-6">
				<div className="col-lg-3">
					<label
						htmlFor="nextDate"
						className="col-form-label fw-bold fs-6 required"
					>
						Next Date
					</label>
					<div className="">
						<DatePicker
							selected={nextDate}
							className="form-control bg-transparent"
							onChange={(date: any, e: any) => {
								setNexttDate(date);
								setFieldValue('filing.nextDate', convertDateFormat(date));
							}}
							dateFormat="yyyy-MM-dd"
						/>
						{touched?.filing?.nextDate && errors?.filing?.nextDate && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.filing.nextDate}`}</span>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="col-lg-3">
					<label
						htmlFor="nextStageId"
						className=" col-form-label fw-bold fs-6 required"
					>
						Next Stage
					</label>

					<Field
						as="select"
						name="filing.nextStageId"
						className={clsx('form-control bg-transparent form-select')}
						onChange={(e: any) => {
							setFieldValue('filing.nextStageId', parseInt(e.target.value));
						}}
					>
						<option value={''} disabled>
							Select Stage
						</option>
						{stageList && stageList.length > 0 ? (
							stageList?.map((list: any, i: any) => (
								<>
									{!params.id && list.isActive === true && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
									{params.id && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
								</>
							))
						) : (
							<option>{NO_RECORDS_FOUND}</option>
						)}
					</Field>
					{touched?.filing?.nextStageId && errors?.filing?.nextStageId && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filing.nextStageId}`}</span>
							</div>
						</div>
					)}
				</div>
				<div className="col-lg-3">
					<label
						htmlFor="nextStageRemarks"
						className=" col-form-label fw-bold fs-6 required"
					>
						Next Stage Remarks
					</label>

					<Field
						placeholder="Next Stage Remarks"
						type="textarea"
						name="filing.nextStageRemarks"
						autoComplete="off"
						className={clsx('form-control bg-transparent')}
					/>
					{touched?.filing?.nextStageRemarks &&
						errors?.filing?.nextStageRemarks && (
							<div className="fv-plugins-message-container">
								<div className="fv-help-block">
									<span role="alert">{`${errors.filing.nextStageRemarks}`}</span>
								</div>
							</div>
						)}
				</div>
				<div className="col-lg-3">
					<label
						htmlFor="nextAdvocateId"
						className=" col-form-label fw-bold fs-6 required"
					>
						Next Advocate
					</label>

					<Field
						as="select"
						name="filing.nextAdvocateId"
						className={clsx('form-control bg-transparent form-select')}
						onChange={(e: any) => {
							setFieldValue('filing.nextAdvocateId', parseInt(e.target.value));
						}}
					>
						<option value={''} disabled>
							Select Advocate
						</option>
						{ourAdvocateList && ourAdvocateList.length > 0 ? (
							ourAdvocateList?.map((list: any, i: any) => (
								<>
									{!params.id && list.isActive === true && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
									{params.id && (
										<option key={i} value={list.id}>
											{list.name}
										</option>
									)}
								</>
							))
						) : (
							<option>{NO_RECORDS_FOUND}</option>
						)}
					</Field>
					{touched?.filing?.nextAdvocateId && errors?.filing?.nextAdvocateId && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filing.nextAdvocateId}`}</span>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="row mb-lg-6">
				<label
					htmlFor="nextDateRemarks"
					className="col-form-label fw-bold fs-6 required"
				>
					Next Date Remarks
				</label>
				<div className="">
					<Field
						placeholder="Next Date Remarks"
						type="textarea"
						name="filing.nextDateRemarks"
						autoComplete="off"
						className={clsx('form-control bg-transparent')}
					/>
					{touched?.filing?.nextDateRemarks && errors?.filing?.nextDateRemarks && (
						<div className="fv-plugins-message-container">
							<div className="fv-help-block">
								<span role="alert">{`${errors.filing.nextDateRemarks}`}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		districtList: state.getDistrictForDropdownReducer.districtList.data,

		stageList: state.getStageForDropdownReducer.stageList,
		stageListLoading: state.getStageForDropdownReducer.loading,

		judgeList: state.getJudgeByTalukaReducer.judgeList,
		judgeListLoading: state.getJudgeByTalukaReducer.loading,

		ourAdvocateList: state.getAllOurAdvocatesForDropdownReducer.ourAdvocateList,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		getDistrictList: () => dispatch(fetchDistrictForDropdown()),
		getStageList: () => dispatch(fetchStageDropdown()),
		getJudgeByTalukaId: (id: any) => dispatch(fetchJudgeByTaluka(id)),
	};
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Step2);
export default connectComponent;
