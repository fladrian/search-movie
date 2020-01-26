import React from 'react'

const FormSearch = ({onSubmit,onChange}) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="field has-addons">
					<div className="control">
						<input className="input"
							type="search"
							name="searchMovie"
							placeholder="Find a repository"
							onChange={onChange} />
					</div>
					<div className="control">
						<button className="button is-warning">
							Search
    			</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default FormSearch