export const paginateStyles = {
  color: 'rgba(169, 169, 169, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  alignItems: 'center'
}

export const dividerStyle = (direction) => ({
  height: direction === 'vertical' ? '' : '1px',
  width: direction === 'vertical' ? '1px' : '100%',
  backgroundColor: 'rgba(169, 169, 169, 0.5)',
  margin: direction === 'vertical' ? '0 20px' : '20px 0',
})

export const buttonStyles = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
  border: 'none',
  padding: '0 10px',
  cursor: 'pointer',
  fontSize: '20px',
  borderRadius: '40%',
  color: '#E0E0E0',
}

export const headerUserListStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center'
}

export const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: '10px 10px'
};

export const thTdStyles = {
  padding: '10px',
  textAlign: 'center',
  borderBottom: '1px solid rgba(169, 169, 169, 0.5)',
  position: 'relative',
  width: '10vw',
  color: 'rgba(169, 169, 169, 0.5)'
};


export const firstThStyles = {
  borderLeft: 'none',
  borderBottom: '1px solid #E0E0E0',
};

export const lastThStyles = {
  borderRigth: 'none',
  borderBottom: '1px solid #E0E0E0',
};

export const middleThStyles = {
  position: 'relative',
};

export const borderStyles = {
  content: '""',
  position: 'absolute',
  height: '80%',
  width: '1px',
  backgroundColor: 'rgba(169, 169, 169, 0.5)',
};