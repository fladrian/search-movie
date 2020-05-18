import React from 'react'

const SearchFormContent = ({ onSubmit, onChange }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="field has-addons">
					<div className="control">
						<input className="input search-input"
							type="search"
							name="searchMovie"
							placeholder="Search your movie..."
							onChange={onChange}
						/>
					</div>
					<div className="control">
						<button className="bthome">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default SearchFormContent