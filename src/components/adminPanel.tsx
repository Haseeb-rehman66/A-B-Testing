import { useDispatch } from 'react-redux';
import { setVariant } from '../store/abTestStore';

const AdminPanel = () => {
  const dispatch = useDispatch();

  const handleVariantChange = (variant: 'A' | 'B') => {
    dispatch(setVariant(variant));
  };

  return (
    <div>
      <h2>Admin Panel Set Varient for User</h2>
      <button onClick={() => handleVariantChange('A')} >Show Variant A</button>
      <button onClick={() => handleVariantChange('B')} >Show Variant B</button>
    </div>
  );
};

export default AdminPanel;
