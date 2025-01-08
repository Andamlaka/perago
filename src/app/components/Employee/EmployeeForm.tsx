import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addEmployee, updateEmployee } from '../../redux/employeeSlice';
import { Button, TextInput, Textarea, Select } from '@mantine/core';

interface EmployeeFormProps {
  employeeId?: number;
  onClose: () => void;
}

interface EmployeeFormInputs {
  name: string;
  description: string;
  parentId: number | null;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  parentId: yup.number().nullable(),
});

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employeeId, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const employees = useSelector((state: RootState) => state.employee.employees);
  const employee = employees.find((emp) => emp.id === employeeId);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EmployeeFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: employee?.name || '',
      description: employee?.description || '',
      parentId: employee?.parentId || null,
    },
  });

  useEffect(() => {
    if (employee) {
      setValue('name', employee.name);
      setValue('description', employee.description);
      setValue('parentId', employee.parentId);
    }
  }, [employee, setValue]);

  const onSubmit: SubmitHandler<EmployeeFormInputs> = (data) => {
    if (employeeId) {
      dispatch(updateEmployee({ id: employeeId, ...data }));
    } else {
      dispatch(addEmployee({ id: Date.now(), ...data }));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        label="Name"
        placeholder="Enter position name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Textarea
        label="Description"
        placeholder="Enter position description"
        {...register('description')}
        error={errors.description?.message}
      />
      <Select
        label="Parent Position"
        placeholder="Select parent position"
        data={[
          { value: '', label: 'No Parent' },
          ...employees.map((emp) => ({
            value: emp.id.toString(),
            label: emp.name,
          })),
        ]}
        {...register('parentId')}
        error={errors.parentId?.message}
        onChange={(value) => setValue('parentId', value ? parseInt(value) : null)}
      />
      <Button type="submit">{employeeId ? 'Update' : 'Add'} Position</Button>
    </form>
  );
};

export default EmployeeForm;
