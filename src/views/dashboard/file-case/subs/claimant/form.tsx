import React from "react";
import style from "../../file-case.module.scss";
import Select from "../../../../../components/select";

const ClaimantForm: React.FC = () => {
	return (
		<form action="" onSubmit={(e) => e.preventDefault()}>
			<div className={style.form__content}>
				<div className={style.form__group}>
					<Select
						options={["High Court", "Magistrate Court", "Customary Court"]}
						name="court"
						handleChange={(op: string) => {}}></Select>
				</div>

				<div className={style.form__group}>
					<Select
						options={[
							"Civil cases",
							"Criminal Cases",
							"Probate",
							"Matrimonial",
							"Others",
						]}
						name="case category"
						handleChange={(op: string) => {}}></Select>
				</div>

				<div className={style.form__group}></div>
			</div>

			{/* second row */}
			<div className={style.form__content}>
				<div className={style.form__group}>
					<label htmlFor="">surname</label>
					<input
						placeholder="Type here..."
						type="text"
						className={style.form__input}
						name="surname"
						id=""
					/>
				</div>

				<div className={style.form__group}>
					<label htmlFor="">First name</label>
					<input
						placeholder="Type here..."
						type="text"
						name="first name"
						id=""
						className={style.form__input}
					/>
				</div>

				<div className={style.form__group}>
					<label htmlFor="">last name</label>
					<input
						placeholder="Type here..."
						type="text"
						name="middle name"
						id=""
						className={style.form__input}
					/>
				</div>
			</div>

			{/* third row */}
			<div className={style.form__content}>
				<div className={style.form__group}>
					<label htmlFor="">alias</label>
					<input
						placeholder="Type here..."
						type="text"
						className={style.form__input}
						name="alias"
						id=""
					/>
				</div>

				<div className={style.form__group}>
					<label htmlFor="">phone number</label>
					<input
						placeholder="Enter phone number"
						type="text"
						name="phone"
						id=""
						className={style.form__input}
					/>
				</div>

				<div className={style.form__group}>
					<label htmlFor="">email</label>
					<input
						placeholder="Type here..."
						type="email"
						name="email"
						id=""
						className={style.form__input}
					/>
				</div>
			</div>

			{/* fourth row */}
			<div className={style.form__content}>
				<div className={style.form__group}>
					<label htmlFor="">Address</label>
					<input
						placeholder="Type here..."
						type="text"
						className={style.form__input}
						name="address"
						id=""
					/>
				</div>
			</div>

			{/* fifth row */}
			<div className={style.form__content}>
				<div className={style.form__group}>
					<Select
						options={["High Court", "Magistrate Court", "Customary Court"]}
						name="state"
						handleChange={(op: string) => {}}></Select>
				</div>

				<div className={style.form__group}>
					<Select
						options={[
							"Civil cases",
							"Criminal Cases",
							"Probate",
							"Matrimonial",
							"Others",
						]}
						name="city"
						handleChange={(op: string) => {}}></Select>
				</div>

				<div className={style.form__group}>
					<Select
						options={[
							"Civil cases",
							"Criminal Cases",
							"Probate",
							"Matrimonial",
							"Others",
						]}
						name="lGA"
						handleChange={(op: string) => {}}></Select>
				</div>

			
			</div>

			<div
				className={style["form__content"]}
				style={{ justifyContent: "flex-end", marginTop: "6rem" }}></div>
		</form>
	);
};

export default ClaimantForm;
