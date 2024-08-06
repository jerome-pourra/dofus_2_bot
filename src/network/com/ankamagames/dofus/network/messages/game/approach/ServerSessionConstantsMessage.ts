import { ServerSessionConstant } from "./../../../types/game/approach/ServerSessionConstant";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerSessionConstantsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9337;

	public variables: Array<ServerSessionConstant>;

    public constructor()
    {
        super();
        this.variables = Array<ServerSessionConstant>();
    }

    public getMessageId()
    {
        return ServerSessionConstantsMessage.protocolId;
    }

    public initServerSessionConstantsMessage(variables: Array<ServerSessionConstant> = null): ServerSessionConstantsMessage
    {
        this.variables = variables;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerSessionConstantsMessage(output);
    }

    public serializeAs_ServerSessionConstantsMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.variables.length);
        for(var _i1: number = 0; _i1 < this.variables.length; _i1++)
        {
            output.writeShort((this.variables[_i1] as ServerSessionConstant).getTypeId());
            (this.variables[_i1] as ServerSessionConstant).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ServerSessionConstantsMessage(input);
    }

    private deserializeAs_ServerSessionConstantsMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: ServerSessionConstant;
        let _variablesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _variablesLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(ServerSessionConstant,_id1);
            _item1.deserialize(input);
            this.variables.push(_item1);
        }
    }

}